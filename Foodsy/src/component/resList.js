let resList = [
  // {
  //   card: {
  //     card: {
  //       "@type":
  //         "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
  //       collectionId: "83639",
  //       title: "Biryani",
  //       description:
  //         "Taste these delectable classics, delectable biryanis to make your day.",
  //       imageId:
  //         "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
  //       aspectRatio: "3.44",
  //       cta: {
  //         link: "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
  //         type: "collectionv2",
  //       },
  //       type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
  //       count: "149 restaurants",
  //     },
  //   },
  // },
  // {
  //   card: {
  //     card: {
  //       "@type":
  //         "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
  //       sortConfigs: [
  //         {
  //           key: "relevance",
  //           title: "Relevance (Default)",
  //           selected: true,
  //           defaultSelection: true,
  //         },
  //         {
  //           key: "deliveryTimeAsc",
  //           title: "Delivery Time",
  //         },
  //         {
  //           key: "modelBasedRatingDesc",
  //           title: "Rating",
  //         },
  //         {
  //           key: "costForTwoAsc",
  //           title: "Cost: Low to High",
  //         },
  //         {
  //           key: "costForTwoDesc",
  //           title: "Cost: High to Low",
  //         },
  //       ],
  //       restaurantCount: 149,
  //       facetList: [
  //         {
  //           label: "10 Mins Delivery",
  //           id: "isRestaurantBolt",
  //           selection: "SELECT_TYPE_SINGLESELECT",
  //           facetInfo: [
  //             {
  //               label: "10 Mins Delivery",
  //               id: "isRestaurantBoltfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_FLATTENED",
  //           subLabel: "Filterby",
  //           icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
  //           selectedIcon:
  //             "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
  //         },
  //         {
  //           label: "Veg/Non-Veg",
  //           id: "isVeg",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Non Veg",
  //               id: "isVegfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Pure Veg",
  //               id: "isVegfacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filterby",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Ratings",
  //           id: "rating",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Ratings",
  //               id: "ratingfacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Ratings 4.0+",
  //               id: "ratingfacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Ratings 4.5+",
  //               id: "ratingfacetquery2",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filterby",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Delivery Time",
  //           id: "deliveryTime",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Less than 30 mins",
  //               id: "deliveryTimefacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Less than 45 mins",
  //               id: "deliveryTimefacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filterby",
  //           openFilter: true,
  //         },
  //         {
  //           label: "Cost For Two",
  //           id: "costForTwo",
  //           selection: "SELECT_TYPE_MULTISELECT",
  //           facetInfo: [
  //             {
  //               label: "Less than Rs. 300",
  //               id: "costForTwofacetquery0",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Rs.300 - Rs.600",
  //               id: "costForTwofacetquery1",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //             {
  //               label: "Greater than Rs. 600",
  //               id: "costForTwofacetquery2",
  //               analytics: {},
  //               openFilter: true,
  //             },
  //           ],
  //           viewType: "VIEW_TYPE_HALF_CARD",
  //           subLabel: "Filterby",
  //           openFilter: true,
  //         },
  //       ],
  //       widgetId: "inlineFacetFilter",
  //     },
  //   },
  // },
 
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "550943",
          name: "Bikkgane Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/6/24/13f250b3-c260-4ca0-bf68-e7c547fbd6c4_b7c5f8cf-cabf-449c-a7ce-7f2839bc64da.jpg",
          locality: "Shukla Colony",
          areaName: "Doranda",
          costForTwo: "₹350 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Andhra",
            "South Indian",
            "North Indian",
            "Mughlai",
            "Kebabs",
          ],
          avgRating: 4.4,
          parentId: "5070",
          avgRatingString: "4.4",
          totalRatingsString: "6.2K+",
          promoted: true,
          adTrackingId:
            "cid=31753506~p=0~adgrpid=31753506#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=550943~plpr=COLLECTION~eid=4119e399-5d5d-4302-a060-ad1b13fd3298~srvts=1754477201537~collid=83639",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-07 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹55",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31753506",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=550943&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "93123",
          name: "Rayds",
          cloudinaryImageId: "da07229ed7dc6c63b3eec763a6de41c0",
          locality: "Hinoo Road",
          areaName: "Birsa Chowk",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian"],
          avgRating: 4.2,
          parentId: "167868",
          avgRatingString: "4.2",
          totalRatingsString: "2.4K+",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 22:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹65 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=93123&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1014642",
          name: "The Biryani Life",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/11/4c5f81d6-b2b8-4505-923e-68e5eb063fad_c058b7a1-8d55-45ea-9ce0-587452754772.jpeg",
          locality: "Hehal",
          areaName: "Harmu Housing Colony",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 3.9,
          parentId: "8496",
          avgRatingString: "3.9",
          totalRatingsString: "81",
          promoted: true,
          adTrackingId:
            "cid=31792901~p=2~adgrpid=31792901#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1014642~plpr=COLLECTION~eid=d3baa02d-dc11-4667-bab2-889570b301f6~srvts=1754477201537~collid=83639",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹159",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31792901",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1014642&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1009321",
          name: "Level 7 Rooftop Multicuisine Restaurant",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/12/18/dd088a27-4555-470b-a17c-029319aa8282_51c878ec-bd18-46bb-bb1b-ba6d4e5a7723.jpg",
          locality: "Hatia",
          areaName: "Hatia",
          costForTwo: "₹200 for two",
          cuisines: [
            "Chinese",
            "Biryani",
            "Mughlai",
            "Street Food",
            "Fast Food",
          ],
          avgRating: 4.2,
          parentId: "249481",
          avgRatingString: "4.2",
          totalRatingsString: "35",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1009321&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1014643",
          name: "LunchBox - Meals and Thalis",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/23/491393d4-8cc2-4a4d-a132-5596734b0825_73799221-0872-4778-87d1-3d7890b7523d.jpeg",
          locality: "Hehal",
          areaName: "Harmu Housing Colony",
          costForTwo: "₹350 for two",
          cuisines: ["Thalis", "North Indian", "Biryani"],
          avgRating: 4.5,
          parentId: "4925",
          avgRatingString: "4.5",
          totalRatingsString: "205",
          promoted: true,
          adTrackingId:
            "cid=31792910~p=4~adgrpid=31792910#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1014643~plpr=COLLECTION~eid=342ebe25-7ede-4d81-9637-5818bc339b79~srvts=1754477201537~collid=83639",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31792910",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1014643&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1116006",
          name: "Arshi's Kitchen",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/6/11/451d25eb-a2a2-4476-91fb-8af6e8bb4483_412a9987-05a7-4231-8f1b-9f55be12c412.jpg",
          locality: "Hatia",
          areaName: "Hatia",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani", "Mughlai", "Thalis", "Indian", "Awadhi"],
          avgRating: 4.4,
          parentId: "279075",
          avgRatingString: "4.4",
          totalRatingsString: "20",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1116006&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1014647",
          name: "The Good Bowl",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/23/491393d4-8cc2-4a4d-a132-5596734b0825_73799221-0872-4778-87d1-3d7890b7523d.jpeg",
          locality: "Hehal",
          areaName: "Harmu Housing Colony",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
          avgRating: 4.3,
          parentId: "7918",
          avgRatingString: "4.3",
          totalRatingsString: "157",
          promoted: true,
          adTrackingId:
            "cid=31792898~p=6~adgrpid=31792898#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1014647~plpr=COLLECTION~eid=4672ce28-d906-49c6-bbfc-a6b007a90e31~srvts=1754477201537~collid=83639",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-08-06 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "31792898",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1014647&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

export default resList;