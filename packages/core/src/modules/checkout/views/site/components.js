const { useSiteComponent } = require("../../../../lib/componee")
const { buildSiteUrl } = require("../../../../lib/routie");

exports = module.exports = {
    "*": [
        {
            id: "miniCart",
            areaId: "iconWrapper",
            source: useSiteComponent("checkout/views/site/MiniCart.js"),
            props: {
                cartUrl: buildSiteUrl("cart"),
                checkoutUrl: buildSiteUrl("checkout")
            },
            sortOrder: 1
        }
    ],
    "cart": [
        {
            id: "shoppingCartLayout",
            areaId: "content",
            source: useSiteComponent("checkout/views/site/cart/Layout.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "emptyCart",
            areaId: "shoppingCartTop",
            source: useSiteComponent("checkout/views/site/cart/Empty.js"),
            props: {
                homeUrl: buildSiteUrl("homepage")
            },
            sortOrder: 10
        },
        {
            id: "cartItems",
            areaId: "shoppingCartLeft",
            source: useSiteComponent("checkout/views/site/cart/Items.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "cartSummary",
            areaId: "shoppingCartRight",
            source: useSiteComponent("checkout/views/site/cart/Summary.js"),
            props: {
                checkoutUrl: buildSiteUrl("checkout")
            },
            sortOrder: 10
        }
    ],
    "checkout": [
        {
            id: "customerInfoStep",
            areaId: "checkoutSteps",
            source: useSiteComponent("checkout/views/site/checkout/CustomerInfoStep.js"),
            props: {
                setContactInfoUrl: buildSiteUrl("checkoutSetContactInfo"),
                //loginUrl: buildSiteUrl("customerLoginPost")
            },
            sortOrder: 5
        },
        {
            id: "checkoutPaymentStep",
            areaId: "checkoutSteps",
            source: useSiteComponent("checkout/views/site/checkout/payment/PaymentStep.js"),
            props: {},
            sortOrder: 15
        },
        {
            id: "checkoutShipmentStep",
            areaId: "checkoutSteps",
            source: useSiteComponent("checkout/views/site/checkout/shipment/ShipmentStep.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "checkoutPage",
            areaId: "content",
            source: useSiteComponent("checkout/views/site/checkout/Checkout.js"),
            props: {},
            sortOrder: 0
        },
        {
            id: "checkoutShippingMethods",
            areaId: "checkoutShippingAddressForm",
            source: useSiteComponent("checkout/views/site/checkout/shipment/ShippingMethods.js"),
            props: {
                getMethodsAPI: buildSiteUrl("checkoutGetShippingMethods")
            },
            sortOrder: 100
        },
        {
            id: "checkoutPaymentMethods",
            areaId: "checkoutBillingAddressForm",
            source: useSiteComponent("checkout/views/site/checkout/payment/PaymentMethods.js"),
            props: {
                getMethodsAPI: buildSiteUrl("checkoutGetPaymentMethods")
            },
            sortOrder: 100
        },
        {
            id: "cartSummary",
            areaId: "shoppingCartRight",
            source: useSiteComponent("checkout/views/site/cart/Summary.js"),
            props: {
                checkoutUrl: buildSiteUrl("checkout")
            },
            sortOrder: 10
        }
    ],
    "checkoutSuccess": [
        {
            id: "checkoutSuccess",
            areaId: "content",
            source: useSiteComponent("checkout/views/site/checkoutSuccess/CheckoutSuccess.js"),
            props: {
            },
            sortOrder: 10
        }
    ]
}