export type Questions = {
  question: string;
  options: string[];
  answer: string;
}[];

export type LoginPageProps = {
  onLogin: (token: string | null) => void;
};
