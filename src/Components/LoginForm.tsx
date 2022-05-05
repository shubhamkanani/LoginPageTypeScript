import React from "react";
import LoginCard from "./LoginCard";

function LoginForm() {
  return (
    <div className="flex">
      <div
        className="w-5/12 text-left"
        style={{ paddingLeft: "150px", marginTop: "90px" }}
      >
        <h1 className="text-5xl font-bold my-20" style={{ color: "#4A4A4A" }}>
          Already A Partner
        </h1>
        <p className="my-10">
          Welcome back! Please login to access all the benefits that come with
          being a partner.
        </p>
        <p>
          Did you know that partners receive automated commission payments,
          access to marketing resources ane more? You never need to worry about
          lead time for paymets. Not to mention our seamless integrations, like
          Salesforce, Crossbeam and more!
        </p>
      </div>
      <div
        className="w-7/12"
        style={{ paddingLeft: "100px", marginTop: "90px" }}
      >
        <LoginCard />
      </div>
    </div>
  );
}

export default LoginForm;
