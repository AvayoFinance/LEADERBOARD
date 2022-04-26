import * as React from "react";

import Account from "./account/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { useContractContext } from "./account/ContractProvider.js";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "./account/AuthProvider.js";
import { config } from "../helpers/config.js";
import Web3 from "web3";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Dashboard(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "black",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    border: "solid thin #2ccbff",
    boxShadow: "0px 0px 11px 2px #2CCBFF ",
    borderRadius: "10px",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }));
  const { contract, wrongNetwork, getBnbBalance, fromWei, toWei, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBNB, setContractBNB] = useState(0);
  const [walletBalance, setWalletBalance] = useState({
    bnb: 0,
    beans: 0,
    rewards: 0,
  });
  const [bakeBNB, setBakeBNB] = useState(0);
  const [calculatedBeans, setCalculatedBeans] = useState(0);
  const [loading, setLoading] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const query = useQuery();

  const fetchContractBNBBalance = () => {
    if (!web3 || wrongNetwork) {
      setContractBNB(0);
      return;
    }
    getBnbBalance(config.contractAddress).then((amount) => {
      setContractBNB(fromWei(amount));
    });
  };

  const fetchWalletBalance = async () => {
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance({
        bnb: 0,
        beans: 0,
        rewards: 0,
      });
      return;
    }

    try {
      const [bnbAmount, beansAmount, rewardsAmount] = await Promise.all([
        getBnbBalance(address),
        contract.methods
          .getMyMiners(address)
          .call()
          .catch((err) => {
            console.error("myminers", err);
            return 0;
          }),
        contract.methods
          .beanRewards(address)
          .call()
          .catch((err) => {
            console.error("beanrewards", err);
            return 0;
          }),
      ]);
      setWalletBalance({
        bnb: fromWei(`${bnbAmount}`),
        beans: beansAmount,
        rewards: fromWei(`${rewardsAmount}`),
      });
    } catch (err) {
      console.error(err);
      setWalletBalance({
        bnb: 0,
        beans: 0,
        rewards: 0,
      });
    }
  };

  const fetchReferrals = async () => {
    const response = await fetch("http://165.22.116.129/-/leaderboard");
    setReferrals(await response.json());
  };

  useEffect(() => {
    fetchContractBNBBalance();
  }, [web3, chainId]);

  useEffect(() => {
    fetchWalletBalance();
  }, [address, web3, chainId]);

  useEffect(() => {
    fetchReferrals();
    const interval = setInterval(fetchReferrals, 30000);
    return () => clearInterval(interval);
  }, []);

  const onUpdateBakeBNB = (value) => {
    setBakeBNB(value);
  };

  const getRef = () => {
    const ref = Web3.utils.isAddress(query.get("ref"))
      ? query.get("ref")
      : "0x0000000000000000000000000000000000000000";
    return ref;
  };

  const bake = async () => {
    setLoading(true);

    const ref = getRef();

    try {
      await contract.methods.buyEggs(ref).send({
        from: address,
        value: toWei(`${bakeBNB}`),
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };

  const reBake = async () => {
    setLoading(true);

    const ref = getRef();

    try {
      await contract.methods.hatchEggs(ref).send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const eatBeans = async () => {
    setLoading(true);

    try {
      await contract.methods.sellEggs().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBNBBalance();
    setLoading(false);
  };

  return (
    <>
      <Fade in={true} style={{ transitionDelay: "100ms" }}>
        <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Item>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      TVL:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {contractBNB} BNB
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      Your Avayo's
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {walletBalance.beans}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      NaN
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      NaN
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      NaN
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      NaN
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      NaN
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      NaN
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      color={"#2ccbff"}
                      variant="h6"
                      component="div"
                      gutterBottom
                    >
                      NaN
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      NaN
                    </Typography>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <Grid paddingTop={"30px"} container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Item height="500px">
                <Typography
                  paddingTop={"24px"}
                  paddingBottom={"14px"}
                  variant="h4"
                  component="div"
                  gutterBottom
                >
                  Referral Leaderboard
                </Typography>
                <Box className={"account_box"}>
                  <Typography
                    color={"#2ccbff"}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    ADDRESS
                  </Typography>
                  <Typography
                    color={"#2ccbff"}
                    variant="h6"
                    component="div"
                    gutterBottom
                  >
                    COUNT
                  </Typography>
                </Box>
                {referrals.map((referral) => (
                  <Box className={"account_box"}>
                    <Typography variant="h6">{referral.referral}</Typography>
                    <Typography variant="h6">{referral.count}</Typography>
                  </Box>
                ))}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </>
  );
}
