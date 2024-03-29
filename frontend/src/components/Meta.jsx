import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" constent={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronicsm cheap electronics",
};

export default Meta;
