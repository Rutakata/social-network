import React from "react";
import Preloader from "../Common/Preloader/preloader";


const withLazyLoading = (Component) => {
    return (
        <React.Suspense fallback={<Preloader />}>
            <Component />
        </React.Suspense>
    )
}

export default withLazyLoading