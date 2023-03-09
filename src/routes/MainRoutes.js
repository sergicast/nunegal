import { Routes, Route } from 'react-router-dom';

import { List, EpisodeDetails, PodcastDetails } from '../pages';

/**
 * @component App routes pages.
 * @returns {React.ReactElement}
 */
export const MainRoutes = function () {

    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />
            <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
            <Route path="*" element={<h1>No existe esta ruta</h1>} />
        </Routes>
    );
};
