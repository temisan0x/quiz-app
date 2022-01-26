import {LoaderWrapper} from "./Loader.styles"

export const Loader = () => {
    return (
        <LoaderWrapper>
            <div className="loader-bg">
                    <h3>Loading...</h3>
                    <div className="loader">
                            <span></span>
                    </div>
            </div>


        </LoaderWrapper>
    )
}