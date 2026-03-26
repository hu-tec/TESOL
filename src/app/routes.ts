import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { AdmissionPage } from "./components/AdmissionPage";
import { TesolCoursePage } from "./components/TesolCoursePage";
import { AiTranslationPage } from "./components/AiTranslationPage";
import { AiPromptPage } from "./components/AiPromptPage";
import { AiEthicsPage } from "./components/AiEthicsPage";
import { IttCoursePage } from "./components/IttCoursePage";
import { CoursePlaceholder } from "./components/CoursePlaceholder";
import { CommunityPage } from "./components/CommunityPage";
import { ContactPage } from "./components/ContactPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { ApplyPage } from "./components/ApplyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "admission", Component: AdmissionPage },
      { path: "courses/tesol", Component: TesolCoursePage },
      { path: "courses/ai-translation", Component: AiTranslationPage },
      { path: "courses/ai-prompt", Component: AiPromptPage },
      { path: "courses/ai-ethics", Component: AiEthicsPage },
      { path: "courses/itt", Component: IttCoursePage },
      { path: "courses/:courseId", Component: CoursePlaceholder },
      { path: "community", Component: CommunityPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "apply", Component: ApplyPage },
      { path: "apply/level-test", Component: ApplyPage },
      { path: "apply/tip", Component: ApplyPage },
      { path: "apply/corporate", Component: ApplyPage },
      { path: "apply/seminar", Component: ApplyPage },
      { path: "apply/orientation", Component: ApplyPage },
      { path: "*", Component: HomePage },
    ],
  },
], { basename: '/TESOL/' });
