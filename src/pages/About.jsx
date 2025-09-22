import React from 'react';
import { Calendar, Award, Heart, MapPin } from 'lucide-react';
import ivyPhoto from '../assets/Ivy.jpg';

const About = () => {
  const skills = [
    'Figma', 'Dreamweaver', 'HTML', 'CSS', 'JavaScript', 'jQuery',
    'Adobe Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere',
    'Canva', 'CorelDraw', 'Capcut', '3ds Max', 'Painter'
  ];

  const experiences = [
    {
      company: '聯合生物醫藥公司',
      position: '多媒體平面設計師',
      period: '2007/04 – 2025/02',
      duration: '17年11個月',
      description: '主導多媒體動畫、網頁、產品與內部刊物設計，將抽象的品牌價值轉化為具體的視覺成果。負責大型展覽與品牌活動的設計與執行，並擔任攝影與影片剪輯師。'
    },
    {
      company: '視覺設計服務公司',
      position: '多媒體動畫設計師',
      period: '2005/09 – 2007/02',
      duration: '1年6個月',
      description: '負責平面設計、網頁製作及品牌設計專案。'
    },
    {
      company: '彩購國際公司',
      position: '視覺設計師',
      period: '2005/04 – 2005/08',
      duration: '5個月',
      description: '執行網站動畫與平面設計專案。'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: '設計比賽冠軍',
      description: '參加設計比賽榮獲冠軍，作品獲得媒體採訪報導'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: '勞工局身分證專案',
      description: '獨立完成大型任務，準時交付並獲主管高度肯定'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '水豚志工',
      description: '熱愛動物，曾擔任水豚志工，展現愛心與責任感'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-noto">
            關於我
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-noto">
            我是一位樂觀、獨立、具備團隊合作精神的設計師，擁有超過25年的豐富經驗
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={ivyPhoto}
                alt="巫姿君 Ivy Wu"
                className="w-80 h-80 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-500 rounded-full p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-dark mb-6 font-noto">
              巫姿君 Ivy Wu
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-noto leading-relaxed">
              擁有超過25年的資深設計經驗，專精於網頁設計、平面設計、多媒體動畫及企業識別系統（CIS）。
              我能夠獨立完成專案，並具備優異的跨部門溝通與協作能力。
            </p>
            <p className="text-lg text-gray-600 mb-6 font-noto leading-relaxed">
              曾成功為 INTEL 和醫療生技公司策劃展覽的整體視覺與行銷素材，有效提升品牌專業形象。
              熟練運用 Adobe Creative Suite，並掌握 HTML/CSS 網站製作能力。
            </p>
            <div className="flex items-center text-pink-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-medium font-noto">新竹, 台灣</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center font-noto">
            核心技能
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <span className="text-sm font-medium text-dark font-noto">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center font-noto">
            工作經歷
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2 font-noto">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-pink-600 font-semibold font-noto">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600 font-medium font-noto">
                      {exp.period}
                    </p>
                    <p className="text-sm text-gray-500 font-noto">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-noto">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center font-noto">
            教育背景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 card-hover">
              <h3 className="text-lg font-bold text-dark mb-2 font-noto">
                中國文化大學
              </h3>
              <p className="text-pink-600 font-medium mb-2 font-noto">
                視覺傳達設計系
              </p>
              <p className="text-gray-600 font-noto">
                1996/07 – 2000/06
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 card-hover">
              <h3 className="text-lg font-bold text-dark mb-2 font-noto">
                新竹女中
              </h3>
              <p className="text-pink-600 font-medium mb-2 font-noto">
                高中部
              </p>
              <p className="text-gray-600 font-noto">
                1993/09 – 1996/06
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center font-noto">
            亮點成果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <div className="text-pink-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-3 font-noto">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 font-noto">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Traits */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6 font-noto">
            個人特質
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed font-noto">
            我是一位樂觀、獨立、具備團隊合作精神的設計師。熱愛運動與動物，
            曾擔任水豚志工。我相信設計不僅是視覺的呈現，更是情感與故事的傳達。
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;

