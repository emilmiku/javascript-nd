/* ## 5. Determine message type based on notification data **1 point**
Given:
```js
const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];
```
### **Your task**

Use **condition statements** (`if`, `else if`, `else`) to assign a **messageType** to each notification.

### **Rules**

1. If `priority === 3` → messageType = `"critical"`
2. If `priority === 2` → messageType = `"warning"`
3. If `priority === 1` → messageType = `"normal"`
4. BUT:
   If a notification is **read: true**, override the result and set messageType = `"read"`

### **Expected output example**

```js
[
  { text: "Low battery", priority: 3, read: false, messageType: "critical" },
  {
    text: "New message from Anna",
    priority: 1,
    read: true,
    messageType: "read",
  },
  {
    text: "System update available",
    priority: 2,
    read: false,
    messageType: "warning",
  },
  { text: "Storage almost full", priority: 3, read: true, messageType: "read" },
  { text: "Friend request", priority: 1, read: false, messageType: "normal" },
];
```
### Requirements
- Must use **if / else if / else**.
- Must process each notification (with a loop _or_ `map`).
- Must correctly apply the **"read overrides everything"** rule. */
"use strict";

const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

const result = notifications.map((notification) => {
  let messageType = "";
  if (notification.read === true) {
    messageType = "read";
  } else if (notification.priority === 3) {
    messageType = "critical";
  } else if (notification.priority === 2) {
    messageType = "warning";
  } else {
    messageType = "normal";
  }

  return { ...notification, messageType };
});

console.log(result);
