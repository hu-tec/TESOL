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
import { 
  LevelTestPage, 
  TipApplicationPage, 
  CorporateEstimatePage, 
  SeminarApplicationPage, 
  OrientationApplicationPage 
} from "./components/FormsPage";

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
      { path: "apply/level-test", Component: LevelTestPage },
      { path: "apply/tip", Component: TipApplicationPage },
      { path: "apply/corporate", Component: CorporateEstimatePage },
      { path: "apply/seminar", Component: SeminarApplicationPage },
      { path: "apply/orientation", Component: OrientationApplicationPage },
      { path: "*", Component: HomePage },
    ],
  },
], { basename: "/TESOL/page2/" });
