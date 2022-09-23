import PropTypes from "prop-types";
// @mui
import { Card, Stack, Typography, Divider } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------

ProfileFollowInfo.propTypes = {
  profile: PropTypes.shape({
    follower: PropTypes.number,
    following: PropTypes.number,
  }),
};

export default function ProfileFollowInfo({ profile }) {
  const { doneAnswer, rating } = profile;

  return (
    <Card sx={{ py: 3 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack width={1} textAlign="center">
          <Typography variant="h4">{doneAnswer}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            지금까지 답변한 수
          </Typography>
        </Stack>

        <Stack width={1} textAlign="center">
          <Typography variant="h4">{rating}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            평점
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
