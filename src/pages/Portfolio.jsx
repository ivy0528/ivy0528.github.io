import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { ExternalLink, Play, Pause } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');



  const filters = [
    { id: 'all', name: '全部作品' },
    { id: 'web', name: '網頁設計' },
    { id: 'visual', name: '視覺設計' },
    { id: 'animation', name: '多媒體動畫' },
    { id: 'branding', name: '品牌設計' }
  ];

  const projects = [
    {
      id: 1,
      title: 'CIS 企業識別系統',
      category: 'branding',
      description: '為聯合生物醫藥公司設計企業識別系統，提升品牌專業形象。',
      image: '/CIS01.jpg',
      tags: ['品牌識別', 'CIS', '視覺設計']
    },
    {
      id: 2,
      title: '展覽布置設計',
      category: 'visual',
      description: '為 INTEL 策劃展覽的整體視覺與行銷素材，有效提升品牌專業形象。',
      image: '/event05.JPG',
      tags: ['展覽設計', '視覺設計', '行銷']
    },
    {
      id: 3,
      title: '節慶賀卡設計',
      category: 'visual',
      description: '節慶賀卡設計，傳達溫馨祝福與品牌形象。',
      image: '/Card01.jpg',
      tags: ['平面設計', '節慶', '賀卡']
    },
    {
      id: 4,
      title: '產品動畫宣傳片',
      category: 'animation',
      description: '多媒體動畫製作，提升品牌傳播效果',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop',
      tags: ['動畫製作', '影片剪輯', '宣傳']
    },
    {
      id: 5,
      title: '勞工局身分證專案',
      category: 'visual',
      description: '大型政府專案的視覺設計，準時交付並獲得高度肯定',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop',
      tags: ['政府專案', '平面設計', '身分證設計']
    },
    {
      id: 6,
      title: '電商平台設計',
      category: 'web',
      description: '完整的電商網站設計與使用者體驗優化',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['電商設計', 'UX設計', '購物體驗']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-noto">
            作品展示
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-noto">
            探索我25年來的設計作品，從視覺設計到網頁開發，每個專案都承載著創意與專業的完美結合
          </p>
        </div>

        {/* Video Introduction */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-dark mb-6 text-center font-noto">
              自我介紹影片
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <video
                id="intro-video"
                className="w-full rounded-2xl shadow-lg"
                playsInline
                controls
                loop
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663147749159/wlomDqMFTwydcXxh.webm"
                type="video/webm"
              >
                您的瀏覽器不支援影片播放。
              </video>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-600 font-noto">
                了解我的設計理念與工作經驗
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/reel/DL8_mYkROb3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Instagram
                </a>
                <a
                  href="https://www.dailymotion.com/video/k5ejcR1g4tObi5DnNZm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Dailymotion
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-hover cursor-pointer"

            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark mb-2 font-noto">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-noto">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Portfolio Links */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6 font-noto">
            更多作品
          </h2>
          <p className="text-xl text-pink-100 mb-8 font-noto">
            瀏覽我的完整作品集與影音頻道
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.flickr.com/photos/201533090@N03/albums"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-200 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              圖像作品集
            </a>
            <a
              href="https://dailymotion.com/playlist/x9wl7ce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-200 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              影音頻道
            </a>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Portfolio;

