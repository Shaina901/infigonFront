import Icon from './Icon.tsx';

export default {
  title: 'Components/Icon',
  component: Icon,
    tags: ["autodocs"],

};

export const ArrowUp = () => <Icon name="arrow-up" size={24} color="green" />;
export const Check = () => <Icon name="check" size={24} color="blue" />;
export const CustomSize = () => <Icon name="arrow-up" size={32} color="red" />;
