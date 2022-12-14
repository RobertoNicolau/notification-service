import { Content } from "./notification-content";
import { Notification } from "./notification";

describe("Notification", () => {
  it("should be able to create a notification content", () => {
    const notification = new Notification({
      content: new Content("Nova Solicitação"),
      category: "social",
      recipientId: "Exemple-recipient-uuid",
    });

    expect(notification).toBeTruthy();
  });
});
