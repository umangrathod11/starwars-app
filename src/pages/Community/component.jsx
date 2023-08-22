import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { EducationReport, GeoGraphyReport, VolunteerReport, MembersLanding } from './TabComponents';
import './style.css';
import { TABS, TAB_IDS } from '../../constants/general';
import NotFound from '../../components/NotFound';
import { Protected } from '../../components/Protected/Protected';


export const Community = () => {
    return (
        <Routes>
            <Route path={`/${TAB_IDS.MEMBERS}/*`} element={
                <Protected>
                    <MembersLanding />
                </Protected>
            }/>
            <Route path={`/${TAB_IDS.EDUCATION_REPORT}`} element={
                <Protected>
                    <EducationReport />
                </Protected>
            } />
            <Route path={`/${TAB_IDS.GEO_GRAPHY_REPORT}`} element={
                <Protected>
                    <GeoGraphyReport />
                </Protected>
            } />
            <Route path={`/${TAB_IDS.VOLUNTEER_REPORT}`} element={
                <Protected>
                    <VolunteerReport />
                </Protected>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

Community.propTypes = {};