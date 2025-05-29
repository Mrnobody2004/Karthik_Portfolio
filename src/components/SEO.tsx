interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ 
  title = "Karthik Reddy Padhira | Machine Learning Data Engineer", 
  description = "Portfolio of Karthik Reddy Padhira, Machine Learning Data Engineer with expertise in AI and data processing.",
  keywords = "machine learning, data engineer, AI, portfolio, python, java"
}: SEOProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default SEO;