// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  try {
    const response = await fetch(
      'https://vintyvibes.myshopify.com/admin/api/2022-07/products.json',
      {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': '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',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const products = await response.json();

    res.statusCode = 200;

    return res.json(products);
  } catch (err) {
    console.log({ err });
  }
};

export default handler;
