import React from "react";
import {Header} from "./Modules/Header";
import {Footer} from "./Modules/Footer";
import {Bloc1} from "./Modules/Bloc1";
import {Bloc2} from "./Modules/Bloc2";
import {Bloc3} from "./Modules/Bloc3";
import {Bloc4} from "./Modules/Bloc4";
import {Bloc5} from "./Modules/Bloc5";
import {Bloc6} from "./Modules/Bloc6";
import {Bloc7} from "./Modules/Bloc7";
import {Bloc8} from "./Modules/Bloc8/Bloc8";
import {BlocNew} from "./Modules/BlocNew/BlocNew";

export const Landing = () => {
    return (
        <div style={{
            overflowX: "hidden",
            // width: 1200,
            // margin: "0 auto"
        }}>
            <Header />
            {/* <Bloc1 />
            <Bloc2 />
            <Bloc3 />
            <Bloc4 />
            <Bloc5 />
            <Bloc6 />
            <BlocNew />
            <Bloc7 />
            <Bloc8 />
            <Footer /> */}
        </div>
    );
};
