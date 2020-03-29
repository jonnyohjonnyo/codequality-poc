import React from 'react';

import Rage from '../sean/rage.jpg';
import Upset from '../sean/upset.jpg';
import Sad from '../sean/sad.jpg';
import Frown from '../sean/frown.jpg';
import Neutral from '../sean/neutral.jpg';
import Grin from '../sean/grin.jpg';
import Smile from '../sean/smile.jpg';
import Cheer from '../sean/cheer.jpg';
import King from '../sean/king.jpg';

const SeanImagesByMood = {
    [-4]: { src: Rage, altText: "A cartoon Sean enraged" },
    [-3]: { src: Upset, altText: "A cartoon Sean upset" },
    [-2]: { src: Sad, altText: "A cartoon Sean looking sad" },
    [-1]: { src: Frown, altText: "A cartoon Sean frowning" },
    0: { src: Neutral, altText: "A cartoon Sean in a neutral mood" },
    1: { src: Grin, altText: "A cartoon Sean grinning" },
    2: { src: Smile, altText: "A cartoon Sean smiling" },
    3: { src: Cheer, altText: "A cartoon Sean cheering" },
    4: { src: King, altText: "A cartoon Sean with a crown on his head" },
}

const Component = ({ mood }) => (
    <img src={SeanImagesByMood[mood].src} alt={SeanImagesByMood[mood].altText} />
);

export default Component;