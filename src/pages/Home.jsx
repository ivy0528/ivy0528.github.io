import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Monitor, Video, Target } from 'lucide-react';
import ivyPhoto from '../assets/Ivy.jpg';

const Home = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: '視覺設計',
      description: '精通平面設計、品牌識別與視覺系統規劃'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: '網頁設計',
      description: '專精於響應式網頁設計，結合美學與實用性'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: '多媒體動畫',
      description: '擅長動態影像設計與多媒體內容製作'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: '品牌策略',
      description: '深度理解品牌價值，提供完整的CIS解決方案'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:min-h-[80vh]">
          
          {/* Hero Section */}
          <div className="lg:col-span-7 bg-pink-light rounded-3xl p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
              <div className="w-full h-full rounded-full border-2 border-pink-400 relative">
                <div className="absolute inset-2 rounded-full border border-pink-400"></div>
                <div className="absolute inset-4 rounded-full bg-pink-400"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-6xl font-bold text-dark mb-4 font-noto">
                資深視覺設計師
                <br />
                <span className="text-pink-600">重新定義</span>
                <br />
                創意與技術的
                <br />
                <span className="text-pink-600">完美融合</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-md font-noto">
                巫姿君擁有超過25年的設計經驗，專精於將抽象的品牌價值轉化為具體的視覺成果，為客戶創造獨特的數位體驗。
              </p>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200 font-medium"
              >
                查看作品
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 bg-pink-medium rounded-3xl p-6 flex items-center justify-center">
            <div className="relative">
              <img
                src={ivyPhoto}
                alt="巫姿君 Ivy Wu"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <div className="text-pink-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2 font-noto">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm font-noto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 text-white flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-noto">
              有想法嗎？
            </h2>
            <p className="text-pink-100 mb-6 font-noto">
              我樂於接受新的挑戰和合作機會。無論是全職工作、專案合作或技術諮詢，都歡迎與我聯絡討論。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-white hover:text-pink-100 transition-colors duration-200 font-medium"
            >
              聯絡我
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Featured Work Preview */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4 font-noto">精選作品</h2>
            <p className="text-gray-600 font-noto">探索我的創意作品集</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-pink-200 to-pink-300"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark mb-2 font-noto">
                    專案 {item}
                  </h3>
                  <p className="text-gray-600 text-sm font-noto">
                    視覺設計與品牌識別系統規劃
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-200 font-medium"
            >
              查看更多作品
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

