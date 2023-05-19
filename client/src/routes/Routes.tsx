import { Route, Switch } from "wouter";
import Products from "@pages/Products";
import Create from "@pages/Create";
import Edit from "@pages/Edit";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Products} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id">
                {(params) => <Edit id={params.id} />}
            </Route>
        </Switch>
    );
}
