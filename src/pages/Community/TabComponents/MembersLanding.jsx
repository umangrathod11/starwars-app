import React from 'react';
import { MemberDetails } from './MemberDetails';
import { MemberForm } from './MemberForm';
import { MembersList } from './MembersList';
import { Link, Route, Routes } from 'react-router-dom';
import { TAB_IDS } from '../../../constants/general';
import { Protected } from '../../../components/Protected/Protected';

export const MembersLanding = () => {
    return (
        <>
            <Routes>
                <Route index element={
                    <Protected>
                        <MembersList />
                    </Protected>} />
                <Route path=":memberId" element={<Protected><MemberDetails /></Protected>} />
                <Route path="add" element={
                    <Protected>
                        <MemberForm />
                    </Protected>
                } />
                <Route path="*" element={<Protected><InvalidMembersPath /></Protected>} />
            </Routes>
        </>
    )
}

// We have 2 implementation of InvalidMembersPath, both are valid

const InvalidMembersPath = () => {
    return (
        <div>
            <h2>Oops !!. At this time we don't have any content to show you for the given URL.</h2>
            <h3>Please click <Link to={`/${TAB_IDS.MEMBERS}`}>here</Link> to go to members list page</h3>
        </div>
    )
}

// const InvalidMembersPath = () => {
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h2>Oops !!. At this time we don't have any content to show you for the given URL.</h2>
//             <h3>Please click <a href="" onClick={() => navigate(`/${TAB_IDS.MEMBERS}`)}>here</a> to go to members list page</h3>
//         </div>
//     )
// }