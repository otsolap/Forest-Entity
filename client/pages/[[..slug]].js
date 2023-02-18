import Error from "next/error";
import { fetchAPI, getGlobalData } from "util/api";
import Blocks from "components/Blocks";
import Meta from "components/Meta";
import { useRouter } from "next/router";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({  blocks, meta, global, pageContext}) => {
    const router = useRouter()

    // check if the required data was provided
    if(!router.isFallback && !blocks.length) {
        return <Error statusCode={404} />
    }

    return (
        <div>
            hello world
        </div>
    )
    
}