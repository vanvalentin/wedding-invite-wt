import {
  PhotoContainer,
  PhotoInfos,
  DateText,
  EventTitle,
} from './PhotoItem.styles';
import PhotoFrame from './PhotoFrame';

interface PhotoItemProps {
  id: number;
  date: string;
  title: string;
  image: string;
}

export default function PhotoItem({ id, date, title, image }: PhotoItemProps) {
  return (
    <PhotoContainer key={id}>
      <PhotoFrame image={image} title={title} />
      <PhotoInfos>
        <DateText>{date}</DateText>
        <EventTitle>{title}</EventTitle>
      </PhotoInfos>
    </PhotoContainer>
  );
}
