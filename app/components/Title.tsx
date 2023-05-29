import { Link, useMatches } from "@remix-run/react";
import Icon from "./Icon";

export default function Title(){
    const matches = useMatches();
    return(
        <>
        {
            matches.filter(
                (match) => match.handle && match.handle.title && !match.handle.return
            )
            .map(
                (match, index) => 
                    <h2 className="display-small on-surface-text title" key={index}>
                        {match.handle.title(match)}
                    </h2>
            )
            }

            {
            matches.filter(
                (match) => match.handle && match.handle.return && match.handle.title
            )
            .map(
                (match, index) =>
                <Link to={match.handle.return(match)} key={index} className="display-small on-surface-text title">
                    <Icon icon="arrow_back_ios" type="outlined" />

                    {match.handle.title(match)}
                </Link>
            )
            }
        </>
    );
}