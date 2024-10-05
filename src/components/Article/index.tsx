import { TwitterLogo } from '../../svgComponents/TwitterLogo';
import { LinkIcon } from '../../svgComponents/LinkIcon';
import { Container, AuthorInfo, AuthorDetails, AuthorName, PublicationDate, SocialMediaIcons, IconLink, Divider, Title, Content } from './styles';
import { LinkedInLogo } from '../../svgComponents/LinkedInLogo';

interface ArticleProps {
  authorName: string;
  publicationDate: string;
  title: string;
  content: string;
}

export function Article({ authorName, publicationDate, title, content }: Readonly<ArticleProps>) {
  return (
    <article>
      <Container>
        <Divider />
        <AuthorInfo>
          <AuthorDetails>
            <AuthorName>{authorName}</AuthorName>
            <PublicationDate>{publicationDate}</PublicationDate>
          </AuthorDetails>
          <SocialMediaIcons>
            <IconLink href="#" aria-label="Twitter">
              <TwitterLogo />
            </IconLink>
            <IconLink href="#" aria-label="LinkedIn">
              <LinkedInLogo />
            </IconLink>
            <IconLink href="#" aria-label="Link">
              <LinkIcon />
            </IconLink>
          </SocialMediaIcons>
        </AuthorInfo>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Container>
    </article>
  );
}
