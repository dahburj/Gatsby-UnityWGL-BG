import React from "react";
import Loadable from "@loadable/component";
import Layout from "../components/layout";

const LoadedBrainMarkModule = Loadable(() => import("../modules/BrainModule"));

export default function BrainPage() {
    return(
        <>
            <div>
                <LoadedBrainMarkModule />
            </div>
        </>
    )
}