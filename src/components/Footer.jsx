import React from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/reel/DL8_mYkROb3',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: '圖像作品集',
      url: 'https://www.flickr.com/photos/201533090@N03/albums',
      icon: <ExternalLink className="w-5 h-5" />
    },
    {
      name: '影音頻道',
      url: 'https://dailymotion.com/playlist/x9wl7ce',
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const quickLinks = [
    { name: '首頁', path: '/' },
    { name: '關於我', path: '/about' },
    { name: '作品展示', path: '/portfolio' },
    { name: '聯絡方式', path: '/contact' }
  ];

  const services = [
    '視覺設計',
    '網頁設計',
    '多媒體動畫',
    '品牌策略'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-noto">
              巫姿君 Ivy Wu
            </h3>
            <p className="text-gray-300 mb-6 font-noto">
              資深視覺設計師，擁有超過25年的設計經驗，專精於創意與技術的完美融合。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-noto">
              快速連結
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200 font-noto"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-noto">
              服務項目
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 font-noto">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-noto">
              聯絡資訊
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <a
                  href="mailto:wu_ivy0528@hotmail.com"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 font-noto"
                >
                  wu_ivy0528@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400" />
                <a
                  href="tel:+886935147360"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 font-noto"
                >
                  +886 935 147 360
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 font-noto">
                  新竹, 台灣
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-noto">
              © {currentYear} 巫姿君 Ivy Wu. 版權所有.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2 font-noto">
                Made with
              </span>
              <Heart className="w-4 h-4 text-pink-400 mx-1" />
              <span className="text-gray-400 text-sm ml-2 font-noto">
                in Taiwan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

