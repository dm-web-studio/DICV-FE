import {
  CalloutContainer,
  IconCircle,
  CalloutIconText,
  CalloutTextWrapper,
  CalloutText,
  WatermarkWrapper,
  StyledSchoolIcon,
  StyledMenuBookIcon,
} from './NoticeCallout.styles';

export function NoticeCallout() {
  return (
    <CalloutContainer>
      <IconCircle>
        <CalloutIconText>
          i
        </CalloutIconText>
      </IconCircle>
      <CalloutTextWrapper>
        <CalloutText variant="body2">
          Admissions are granted based on seat availability and performance in the assessment.
          <br />
          The school reserves the right to make the final decision.
        </CalloutText>
      </CalloutTextWrapper>
      <WatermarkWrapper>
        <StyledSchoolIcon />
        <StyledMenuBookIcon />
      </WatermarkWrapper>
    </CalloutContainer>
  );
}
