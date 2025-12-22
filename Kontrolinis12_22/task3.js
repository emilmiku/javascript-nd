/* ## 3. Normalize and modify product names **1 point**

Given:

```js
const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];
```

Transform each product name into a **clean, formatted** version:

### **Expected output structure**

```js
[
  "super phone 3000",
  "mega laptop",
  "wifi router",
  "portable charger",
  "usb cable",
];
```

### **Rules to apply to each string**

1. **Trim** leading and trailing spaces
2. **Replace** hyphens (`-`) with spaces
3. **Convert** everything to **lowercase** */
"use strict";

const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];

const modifiedProducts = products.map(item =>
  item.trim().replace(/-/g, ' ').toLowerCase()
);

console.log(modifiedProducts);