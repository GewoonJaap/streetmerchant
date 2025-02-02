import {Store} from './store';

export const AmazonFr: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: [
      {
        container: '#add-to-cart-button',
        text: ['ajouter au panier'],
      },
      {
        container: '#buy-now-button',
        text: ['acheter cet article '],
      },
    ],
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Actuellement indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.fr/dp/B07PW9VBK5',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR7SV3M',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR5SXPS',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HGBYWQ6',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR3Y5GQ',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR55YB5',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR4RJ3Q',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HR6FMF3',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJTH61J',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJS2JLJ',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HHDP9DW',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HH5WF97',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.amazon.fr/dp/B08HJNKT3P',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJQ182D',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HR9D2JS',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJRF2CN',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJPDJTY',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJGNJ81',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.amazon.fr/dp/B08HJLLF7G',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.amazon.fr/dp/B08166SLDF',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.amazon.fr/dp/B0815XFSGK',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amazon.fr/dp/B08164VTWH',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amazon.fr/dp/B0815Y8J9N',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.fr/dp/B08H93ZRK9',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.fr/dp/B08H98GVK8',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.fr/dp/B08H93ZRLL',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.fr/dp/B087VM5XC6',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTHVWZ7K&Quantity.1=1',
      model: 'rog astral',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTHVWZ7K?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTHV8THW&Quantity.1=1',
      model: 'rog astral oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTHV8THW?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DS2Z8854&Quantity.1=1',
      model: 'tuf gaming',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DS2Z8854?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTHW9MBH&Quantity.1=1',
      model: 'tuf gaming',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTHW9MBH?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'asus',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTHWSR1X&Quantity.1=1',
      model: 'tuf gaming oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTHWSR1X?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT9YQR11&Quantity.1=1',
      model: 'aorus master',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT9YQR11?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT9WQW4T&Quantity.1=1',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT9WQW4T?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'gigabyte',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT7GMXHB&Quantity.1=1',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT7GMXHB?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT6Q3BXM&Quantity.1=1',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT6Q3BXM?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0BSN426TP&Quantity.1=1',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0BSN426TP?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT6SN14V&Quantity.1=1',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT6SN14V?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96',
    },
    {
      brand: 'msi',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DT6S77JK&Quantity.1=1',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DT6S77JK?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTJFSSZG&Quantity.1=1',
      model: 'argb oc triple fan',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTJFSSZG?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
    {
      brand: 'pny',
      cartUrl:
        'https://www.amazon.fr/gp/aws/cart/add.html?ASIN.1=B0DTJF8YT4&Quantity.1=1',
      model: 'oc triple fan',
      series: '5090',
      url: 'https://www.amazon.fr/dp/B0DTJF8YT4?tag=nowinet08-21&linkCode=ogi&th=1&m=A1X6FK5RDHNB96&psc=1',
    },
  ],
  name: 'amazon-fr',
  country: 'FR',
};
