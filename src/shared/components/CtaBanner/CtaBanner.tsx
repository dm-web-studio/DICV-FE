import { type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import {
  BannerContainer,
  TextSection,
  IconWrapper,
  BannerTitle,
  BannerSubtitle,
} from './CtaBanner.styles';

export interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  icon?: ReactNode;
}

export function CtaBanner({ title, subtitle, buttonText, buttonLink, icon }: CtaBannerProps) {
  const navigate = useNavigate();

  return (
    <BannerContainer>
      <TextSection>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <Box>
          <BannerTitle variant="h3">{title}</BannerTitle>
          <BannerSubtitle variant="body2">{subtitle}</BannerSubtitle>
        </Box>
      </TextSection>
      <Button
        variant="outlined"
        color="secondary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => navigate(buttonLink)}
      >
        {buttonText}
      </Button>
    </BannerContainer>
  );
}
