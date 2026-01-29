
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import { LogOutIcon } from "lucide-react";


export const profileSideMenu = [
  { key: "profile", icon: <PersonIcon />, label: "My Profile" },
  { key: "wishlist", icon: <FavoriteBorderIcon />, label: "Wishlist" },
  { key: "faq", icon: <HelpOutlineIcon />, label: "FAQ's" },
  { key: "logout", icon: <LogOutIcon />, label: "Logout" },
];

export const faqs = [
  {
    question: "Can I have multiple registrations?",
    answer:
      "Each email address and contact phone number can only be associated with one account.",
  },
  {
    question: "Are there any registration charges?",
    answer:
      "There are no registration charges involved. It is completely free.",
  },
  {
    question: "What are the modes of payment?",
    answer: (
      <>
        <p>You can pay for your order using the following modes of payment:</p>
        <ol type="a">
          <li>a. Cash on delivery</li>
          <li>b. Credit and debit cards (VISA / Mastercard / Rupay)</li>
          <li>c. Wallets & UPI</li>
        </ol>
      </>
    ),
  },
  {
    question: "How do I check the current status of my order?",
    answer:
      "You can check the current status of the order by clicking view your order link sent to you via SMS or check the My Order History section for tracking.",
  },
  {
    question: "How do you intimate me with the status of my order?",
    answer:
      "You will be intimated via SMS at every stage of your order processing right from order confirmation to delivery.",
  },
  {
    question:
      "What do I do if an item is defective (broken, leaking, expired)?",
    answer:
      "Your satisfaction is our utmost goal. We accept returns if the product is not up to your satisfaction at the time of delivery. You can return it to the delivery personnel at the time of delivery or you can contact our customer support team on 9953112277 and we will do the needful.",
  },
  {
    question: "Can I add more than one delivery address to an account ?",
    answer:
      "Yes, you can add multiple delivery addresses to your account. However, remember that all items placed in a single order can only be delivered to one address. If you want different products delivered to a different address you need to place them as separate orders.",
  },
  {
    question:
      "How do I get an item if it is out of stock or not available with zanamotorcycles.com?",
    answer:
      "If you are unable to find a product or brand that you are looking for, please write to us at Support@zanainternational.com and we will make our best efforts to bring it for you.",
  },
  {
    question:
      "Can I get the order delivered to a different address from my registered address?",
    answer:
      "Yes, of course. Before checkout, the portal will prompt you to select the registered address or an alternate address to which you want this particular order to be delivered. You can choose the alternate address and mention it in the form and your order will be delivered to the alternate address.",
  },
  {
    question: "What is My Order History?",
    answer:
      "My Order history is for the buyer to keep track of all current and past orders and their status in the order process. It allows the buyer to get up-to-date information on each order placed online, including shipping updates, delivery, and payment details.",
  },
];
