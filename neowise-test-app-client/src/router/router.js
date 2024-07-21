import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "../containers/Login";
import HomepageContainer from "../containers/Homepage";
class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Get value from localStorage or use default
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
    };
    // Listen to storage event
    window.addEventListener("storage", (e) => this.storageChanged(e));

    // Bind this to storageChanged()
    this.storageChanged = this.storageChanged.bind(this);
  }

  storageChanged(e) {}

  // Listen to storage event
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  render() {
    let user = this?.props?.user || {};
    let localLoggedInFlag = this?.props?.loginFlagGlobal;

    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LoginContainer />} />

            <Route path="/home/:uuid" element={<HomepageContainer />} />

            {/* <Route path="*" element={<PageNotFoundScreen />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
