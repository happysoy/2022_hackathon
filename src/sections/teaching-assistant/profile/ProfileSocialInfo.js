import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Card, CardHeader, Stack } from "@mui/material";
// components
import Iconify from "../../../components/Iconify";

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileSocialInfo.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileSocialInfo({ profile }) {
  const { githubLink, facebookLink, instagramLink, linkedinLink, twitterLink } =
    profile;

  const SOCIALS = [
    {
      name: "GitHub",
      icon: <IconStyle icon={"bxl:github"} color="#333333" />,
      href: githubLink,
    },

    {
      name: "Instagram",
      icon: <IconStyle icon={"ant-design:instagram-filled"} color="#D7336D" />,
      href: instagramLink,
    },
  ];

  return (
    <Card>
      <CardHeader title="Social" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOCIALS.map((link) => (
          <Stack key={link.name} direction="row" alignItems="center">
            {link.icon}
            <Link component="span" variant="body2" color="text.primary" noWrap>
              {link.href}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
