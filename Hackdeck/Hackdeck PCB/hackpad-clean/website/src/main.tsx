import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import SimpleTutorial from "./pages/hackpad/SimpleTutorial.mdx";
import Submission from "./pages/hackpad/Submission.mdx";
import KitContents from "./pages/hackpad/KitContents.md";
import Faq from "./pages/hackpad/Faq.mdx";
import Braindump from "./pages/hackpad/deprecated/Braindump.mdx";
import Resources from "./pages/hackpad/Resources.mdx";
import GetKeycap from "./pages/hackpad/deprecated/GetKeycap.mdx";
import CardGrant from "./pages/hackpad/CardGrant.mdx";
import Guide from "./pages/hackpad/guide_staging.md";
import OtherParts from "./pages/hackpad/OtherParts.mdx";

import Overview from "./pages/hackboard/Overview.mdx";
import Faq2 from "./pages/hackboard/Faq2.mdx";

import DocPage from "./layouts/DocPage.tsx";
import SideBarKeyboard from "./components/SideBarKeyboard.tsx";
import SideBar from "./components/SideBar.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// IMPORT YOUR PROJECTS HERE
import OrpheusPad from "./pages/submissions/Orpheuspad/OrpheusPad.mdx";
import CyaoPad from "./pages/submissions/Cyaopad/CyaoPad.mdx";
import Wang01 from "./pages/submissions/Wang01/Wang01.mdx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/guide",
        element: <DocPage Content={SimpleTutorial} SideBar={SideBar} />,
    },
    {
        path: "/add-components",
        element: <DocPage Content={OtherParts} SideBar={SideBar} />,
    },
    {
        path: "guide2",
        element: <DocPage Content={Guide} SideBar={SideBar} />,
    },
    {
        path: "/submitting",
        element: <DocPage Content={Submission} SideBar={SideBar} />,
    },
    {
        path: "/parts",
        element: <DocPage Content={KitContents} SideBar={SideBar} />,
    },
    {
        path: "/faq",
        element: <DocPage Content={Faq} SideBar={SideBar} />,
    },
    {
        path: "/braindump",
        element: <DocPage Content={Braindump} SideBar={SideBar} />,
    },
    {
        path: "/resources",
        element: <DocPage Content={Resources} SideBar={SideBar} />,
    },
    {
        path: "/get-keycap",
        element: <DocPage Content={GetKeycap} SideBar={SideBar} />,
    },
    {
        path: "/cardgrant",
        element: <DocPage Content={CardGrant} SideBar={SideBar} />,
    },
    {
        path: "/keyboard",
        element: <DocPage Content={Overview} SideBar={SideBarKeyboard} />,
    },
    {
        path: "/keyboard/faq",
        element: <DocPage Content={Faq2} SideBar={SideBarKeyboard} />,
    },

    // Submitting? Great! Do something like this:
    {
        path: "/projects/orpheuspad",
        element: <DocPage Content={OrpheusPad} SideBar={SideBar} />,
    },
    {
        path: "/projects/cyaopad",
        element: <DocPage Content={CyaoPad} SideBar={SideBar} />,
    },
    {
        path: "/projects/wang01",
        element: <DocPage Content={Wang01} SideBar={SideBar} />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
