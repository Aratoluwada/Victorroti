import crest from './assets/crest.png';

// The school's own crest, cut to the blue disc from the school's social media image.
export default function Logo({ size = 44, title = 'Victorroti Private Secondary School crest' }) {
  return <img className="logo-mark" src={crest} width={size} height={size} alt={title} />;
}
