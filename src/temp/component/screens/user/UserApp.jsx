import React, { Component } from 'react';
/*import ListCoursesComponent from './ListCoursesComponent';*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/*import CourseComponent from './CourseComponent';*/

class UserApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>User Domain</h1>
                    {/* COMENTÁRIO JSX 
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                */}
                </>
            </Router>
        )
    }
}

export default UserApp