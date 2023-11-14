import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  TestPage  from './TestPage';
import BlogPage from './BlogPage';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                        element={<TestPage />}>
                </Route>
                <Route path="/testpage/:testpageId" element= {<TestPage />}></Route>
                <Route
                    path="/"
                        element={<BlogPage />}>                        
                </Route>
                <Route path="/blogpage/:blogpageId" element= {<BlogPage />}></Route>
            </Routes>
        </Router>
    )
}