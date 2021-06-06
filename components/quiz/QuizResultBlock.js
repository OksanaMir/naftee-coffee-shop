import { ProductQuiz } from "../product/ProductQuiz";

export const ResultBlock = ({ product, answers }) => {
  return (
    <>
      <ProductQuiz
        product={product}
        quantity={answers.package}
        method={answers.method}
      />
    </>
  );
};
