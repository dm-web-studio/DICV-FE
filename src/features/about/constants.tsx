import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import ParkIcon from '@mui/icons-material/Park';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DomainIcon from '@mui/icons-material/Domain';
import type { ReactNode } from 'react';

export const WHY_CHOOSE_US_ICONS: Record<string, ReactNode> = {
  "Dual-medium curriculum": <MenuBookIcon />,
  "Experienced faculty": <SchoolIcon />,
  "Green, calm campus": <ParkIcon />,
  "Discipline & values": <WorkspacePremiumIcon />,
};

export const ACHIEVEMENT_ICONS: Record<string, ReactNode> = {
  "Inter-school sports champions": <EmojiEventsOutlinedIcon />,
  "Consistent board results": <WorkspacePremiumOutlinedIcon />,
  "Active co-curricular record": <StarBorderIcon />,
};

export const SPORTS_ICONS: Record<string, ReactNode> = {
  "Karate": <SportsMartialArtsIcon />,
  "Football": <SportsSoccerIcon />,
  "Cricket": <SportsCricketIcon />,
  "Athletics": <DirectionsRunIcon />,
};

export const STATS_ICONS: Record<string, ReactNode> = {
  "Year established": <EventAvailableIcon />,
  "Years of Experience": <DomainIcon />,
  "Mediums of instruction": <MenuBookIcon />,
  "Sports disciplines": <SportsSoccerIcon />,
};
