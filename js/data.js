(function () {
  var global = window;
  global.Data = {
    getUser: function (userId) {
      return users.filter(function (user) {
        return user.id == userId;
      })[0];
    },
    getPosts: function () {
      return posts;
    },
    getRelatedPosts: function () {
      return posts.slice(5, 14);
    },
    getPostComments: function () {
      return [{
        username: 'Nick',
        text: 'my comment'
      }, {
        username: 'Alice',
        text: 'Alice comment'
      }];
    },
    getCurrentPost: function () {
      // parse ?id=2 => 2
      var id = location.search.slice(1).split('=')[1];
      return this.getPost(id);
    },
    getPost: function (id) {
      return ( id ? posts.filter(function (post) {
        return post.id == id;
      }) : this.getPosts() )[0];
    }
  };

  var posts = [
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/8a/25/cf/8a25cf66b7ee0fef0ebce57c6ee1d831.jpg",
      "likeCount": 0,
      "description": "A little flat lay inspiration for the stylish dresser who is looking for a timeless look.",
      "userId": "aab",
      "id": "738"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/44/2b/66/442b66137142f7ae3412c5e5a701eb7a.jpg",
      "likeCount": 0,
      "description": "Den Look kaufen:  <a href=\"https://lookastic.de/herrenmode/wie-kombinieren/pullover-mit-rundhalsausschnitt-chinohose-bootsschuhe-rucksack-uhr/1076\" rel=\"nofollow\" target=\"_blank\">lookastic.de/...</a>  — Weißer und dunkelblauer horizontal gestreifter Pullover mit Rundhalsausschnitt  — Beige Chinohose  — Blaue Segeltuch Bootsschuhe  — Beige Rucksack  — Weiße keramische Uhr",
      "userId": "aaa",
      "id": "839"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/9e/a0/2b/9ea02bd640366f9bcf22656e428f42c0.jpg",
      "likeCount": 0,
      "description": "<a class=\"pintag\" href=\"/explore/hairstyles/\" title=\"#hairstyles explore Pinterest\">#hairstyles</a>",
      "userId": "aac",
      "id": "840"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/cd/9e/fb/cd9efb1570bd5c346a825957ad7cfbe2.jpg",
      "likeCount": 0,
      "description": "Under cut with shaved bottom and very little graduation to next section and no graduation between side and top",
      "userId": "aac",
      "id": "541"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/01/bf/8d/01bf8d3e900af748c238db80e210243b.jpg",
      "likeCount": 0,
      "description": "For a comfortable-as-your-couch outfit, consider wearing a dark brown wool blazer and navy jeans. Finish it off with dark brown suede derby shoes. Shop this look for $297: <a href=\"http://lookastic.com/men/looks/derby-shoes-and-jeans-and-scarf-and-blazer-and-bow-tie-and-dress-shirt-and-shawl-cardigan-and-sunglasses/4130\" rel=\"nofollow\" target=\"_blank\">lookastic.com/...</a> — Dark Brown Suede Derby Shoes — Navy Jeans — Charcoal Scarf — Dark Brown Wool Blazer — Red Plaid Bow-tie — White Dress Shirt — Charcoal Shawl Cardigan — Dark Brown ...",
      "userId": "aab",
      "id": "742"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/af/74/5b/af745be2c116420d63ae16abd058fb89.jpg",
      "likeCount": 0,
      "description": "",
      "userId": "aaa",
      "id": "443"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/ff/51/50/ff5150bc48a78d45a5e20a256325e4f5.jpg",
      "likeCount": 0,
      "description": "49 New Hairstyles For Men For 2016 <a href=\"http://www.menshairstyletrends.com/49-new-hairstyles-for-men-2016/\" rel=\"nofollow\" target=\"_blank\">www.menshairstyle...</a>",
      "userId": "aaa",
      "id": "444"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/b9/07/e2/b907e26bfea11433699eac6dd70d5414.jpg",
      "likeCount": 0,
      "description": "Isaac is meant to be this attractive artist guy so this is how he should look. So, when we first seen him in the play he should be casual because he just came to speak with Emily.",
      "userId": "aab",
      "id": "145"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/80/26/7c/80267cc8d0e61742bc8f3030d9d29c41.jpg",
      "likeCount": 0,
      "description": "MEN BANANA REPUBLIC LUXURY",
      "userId": "aaa",
      "id": "846"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/ec/15/99/ec1599b15ac4f955ff110b42d2ae808b.jpg",
      "likeCount": 0,
      "description": "The epitome of cool. <a class=\"pintag\" href=\"/explore/menswear/\" title=\"#menswear explore Pinterest\">#menswear</a> <a class=\"pintag searchlink\" data-query=\"%23streetstyle\" data-type=\"hashtag\" href=\"/search/?q=%23streetstyle&amp;rs=hashtag\" rel=\"nofollow\" title=\"#streetstyle search Pinterest\">#streetstyle</a> <a class=\"pintag searchlink\" data-query=\"%23streetfashion\" data-type=\"hashtag\" href=\"/search/?q=%23streetfashion&amp;rs=hashtag\" rel=\"nofollow\" title=\"#streetfashion search Pinterest\">#streetfashion</a>",
      "userId": "aac",
      "id": "647"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/fb/ce/07/fbce070bb1d1486cdc14056327556551.jpg",
      "likeCount": 0,
      "description": "Yeezy Boost 350. Legendary.",
      "userId": "aaa",
      "id": "548"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/fc/18/db/fc18db60976fd6e930d305247f2cb8e2.jpg",
      "likeCount": 0,
      "description": "Men's fashion",
      "userId": "aaa",
      "id": "349"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/3d/42/1a/3d421a4d68a4d2d5234d103560395369.jpg",
      "likeCount": 0,
      "description": "faded hairstyle",
      "userId": "aac",
      "id": "250"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/9d/06/42/9d064235800e8aaa14c4a462671f0bf5.jpg",
      "likeCount": 0,
      "description": "Artisan Matte Black Onyx Yoga Mala Bracelet | Unisex Wrist Mala | Men Beads | Spiritual Bracelet | Healing Stone | Mala Beads | Men Mala |",
      "userId": "aac",
      "id": "451"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/e6/d0/ef/e6d0ef7025711feb90eaeb9103882e3a.jpg",
      "likeCount": 0,
      "description": "How to Tie a Bow Tie.",
      "userId": "aaa",
      "id": "552"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/fa/56/d9/fa56d96e88e9d7532994c9b88cb35ce5.jpg",
      "likeCount": 0,
      "description": "love the asymmetry and the texture!",
      "userId": "aaa",
      "id": "553"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/af/4d/12/af4d128be1d322e2cb156dbb336efdd6.jpg",
      "likeCount": 0,
      "description": "",
      "userId": "aac",
      "id": "854"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/5c/2f/d5/5c2fd5715c0b48ceda766e1e289de205.jpg",
      "likeCount": 0,
      "description": "The definitive guide to dress shoes",
      "userId": "aaa",
      "id": "055"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/3a/d8/68/3ad868a6dcdb68ab2ab0e39ae04288c6.jpg",
      "likeCount": 0,
      "description": "5 ways to wear a sport coat, men's style inspiration from Style Girlfriend",
      "userId": "aaa",
      "id": "456"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/c1/6e/70/c16e706af8f19548cffcc34fd87db3e6.jpg",
      "likeCount": 0,
      "description": "If youre not running, dont wear running shoes <a class=\"pintag searchlink\" data-query=\"%23dresslikeaman\" data-type=\"hashtag\" href=\"/search/?q=%23dresslikeaman&amp;rs=hashtag\" rel=\"nofollow\" title=\"#dresslikeaman search Pinterest\">#dresslikeaman</a> <a class=\"pintag\" href=\"/explore/menswear/\" title=\"#menswear explore Pinterest\">#menswear</a> <a class=\"pintag\" href=\"/explore/style/\" title=\"#style explore Pinterest\">#style</a> <a class=\"pintag\" href=\"/explore/inspiration/\" title=\"#inspiration explore Pinterest\">#inspiration</a> | Raddest Men's Fashion Looks On The Internet: <a href=\"http://www.raddestlooks.org\" rel=\"nofollow\" target=\"_blank\">www.raddestlooks.org</a>",
      "userId": "aaa",
      "id": "657"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/2c/60/4a/2c604a8a13f41758dea3aaf9168be800.jpg",
      "likeCount": 0,
      "description": "Men's hair. Great profile. \"Thomas came by the studio recently to model for Of a Kind and I could not get over his most recent hair cut. It reminded me of a photo series Norman Parkinson did of Montgomery Clift… and I was obsessed.\"",
      "userId": "aab",
      "id": "458"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/f1/42/89/f142896ca25b16fc03cbcd1e2a618cf3.jpg",
      "likeCount": 0,
      "description": "layered",
      "userId": "aab",
      "id": "459"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/18/2f/fd/182ffd463acd2d96f89a72e4983aad7e.jpg",
      "likeCount": 0,
      "description": "Drybar Treatment Oil - 100 PROOF. Great for eliminating frizz on straight hair",
      "userId": "aac",
      "id": "460"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/b7/18/7c/b7187ce48b9fdce242873a0f39ae339e.jpg",
      "likeCount": 0,
      "description": "Women with great hair do exactly 12 things each day.",
      "userId": "aaa",
      "id": "761"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/f5/2f/91/f52f916d921795d5d7fdf27307adaa02.jpg",
      "likeCount": 0,
      "description": "How To Tie a Tie Trinity Knot for your Necktie (+playlist)",
      "userId": "aac",
      "id": "362"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/a7/ad/27/a7ad270a4253d9fd23e58670ec9f030f.jpg",
      "likeCount": 0,
      "description": "Matching your shirts and ties can be disorienting. Our guide to shirt and tie combos will give you the basics and you'll be a pro in no time.",
      "userId": "aaa",
      "id": "863"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/5b/bb/46/5bbb46a21dd5fc5d084ba99ad9188141.jpg",
      "likeCount": 0,
      "description": "",
      "userId": "aab",
      "id": "364"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/c1/3e/f8/c13ef8ef039966d3a302e34d0ecfef94.jpg",
      "likeCount": 0,
      "description": "Pocket Square tutorial... Great infographic ♔ Style 2",
      "userId": "aaa",
      "id": "465"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/56/31/bf/5631bf8d6dcc87bf0e4426dc79afd56e.jpg",
      "likeCount": 0,
      "description": "A brown leather jacket is one item that may top the look of a classic, black leather jacket. Enjoy a fashion inspired collection of brown leather jackets.",
      "userId": "aab",
      "id": "466"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/d8/dc/67/d8dc674ecac53dfc6c7ec742a79cb33e.jpg",
      "likeCount": 0,
      "description": "30 Different Ways to Tie a Tie That Every Man Should Know",
      "userId": "aab",
      "id": "867"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/1d/f1/21/1df1210a428acb47d3a826525a5abba5.jpg",
      "likeCount": 0,
      "description": "Which shades should I wear?",
      "userId": "aab",
      "id": "468"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/e9/da/43/e9da43ece489e11f73be02131017eeab.jpg",
      "likeCount": 0,
      "description": "Your Style - Men pinterest.com/pinsbychris fashion, style, clothes, shoes",
      "userId": "aac",
      "id": "269"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/de/20/42/de20426c4a7462377b03737dd52d5f1d.jpg",
      "likeCount": 0,
      "description": "16 Stylish Men’s Hats | Hat Style Guide | Man’s Headwear Infographic",
      "userId": "aab",
      "id": "770"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/0e/d9/5f/0ed95f6269c03c017531b736864a9e12.jpg",
      "likeCount": 0,
      "description": "suit",
      "userId": "aab",
      "id": "771"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/83/99/44/839944c8f9bd0fd968ff9806d64610e9.jpg",
      "likeCount": 0,
      "description": "",
      "userId": "aaa",
      "id": "272"
    },
    {
      "imgUrl": "https://s-media-cache-ak0.pinimg.com/474x/9a/8e/52/9a8e5209db4eba9916051940b85be020.jpg",
      "likeCount": 0,
      "description": "Welcome to your messages!",
      "userId": "aac",
      "id": "573"
    }
  ];

  var users = [
    {
      "id": "aaa",
      "email": "testuser1@yandex.ua",
      "name": "testuser1",
      "image": "https://scontent-ams2-1.cdninstagram.com/t51.2885-15/e35/12545398_945000835580309_730600571_n.jpg",
      "password": "322e6eeaa1c49cb201a68bcff9b0567399ed4848e3b92046d063690616becaec",
      "following": {
        "tags": [],
        "users": []
      }
    },
    {
      "id": "aab",
      "email": "nickolas.shishov@yandex.ua",
      "name": "okonkwo",
      "image": "https://s-media-cache-ak0.pinimg.com/avatars/horujaya_1428587412_280.jpg",
      "password": "cb0c9e0026a21e8a0d5a163f4ae4a2e4978e22f8bc705840ebdad1a99762bf79",
      "following": {
        "tags": [
          {
            "name": "sport",
            "active": true
          },
          {
            "name": "climbing",
            "active": true
          }
        ],
        "users": [
          {
            "id": "aaa",
            "active": true
          },
          {
            "id": "aac",
            "active": true
          }
        ]
      }
    },
    {
      "id": "aac",
      "email": "qwerty@yandex.ua",
      "name": "qwerty",
      "image": "https://s-media-cache-ak0.pinimg.com/avatars/horujaya_1428587412_280.jpg",
      "password": "322e6eeaa1c49cb201a68bcff9b0567399ed4848e3b92046d063690616becaec",
      "following": {
        "tags": [],
        "users": []
      }
    }
  ];
})();