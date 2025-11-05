import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

import { SocketProvider } from "./context/SocketContext";
import { NotificationProvider } from "./context/NotificationContext";

import './i18n';
import { useTranslation } from 'react-i18next';

import Home from "@/pages/Home"
import Test from "@/pages/Test"
import Profile from "@/pages/Profile"
import Ladder from "@/pages/Ladder"
import Game from "@/pages/Game"
import Login from "@/pages/login"
import SignIn from "@/pages/Register"
import Tournoi from "@/pages/tournoi"
import LiveChat from "@/pages/liveChat"

// import Testlog from "@/pages/testlog"

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Sélecteur de langue  */}
      <div className="absolute top-4 right-4 text-sm text-gray-300 z-50">
        <select
          onChange={(e) => changeLang(e.target.value)}
          defaultValue={localStorage.getItem('lang') || 'en'}
          className="bg-gray-800 border border-gray-600 rounded p-1"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="fr">🇫🇷 FR</option>
          <option value="es">🇪🇸 ES</option>
        </select>
      </div>

      <BrowserRouter>
        <NotificationProvider>
          <SocketProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ladder" element={<Ladder />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/game" element={<Game />} />
              <Route path="/tournoi" element={<Tournoi />} />
              <Route path="/liveChat" element={<LiveChat />} />
            </Routes>
          </SocketProvider>
        </NotificationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
