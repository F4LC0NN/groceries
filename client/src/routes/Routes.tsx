import { Route, Switch } from "wouter";
import Products from "@pages/Products";
import Create from "@pages/Create";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Products} />
            <Route path="/create" component={Create} />
        </Switch>
    );
}
