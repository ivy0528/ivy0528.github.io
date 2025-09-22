import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink, Send, Palette, Monitor, Video, Target } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模擬表單提交
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 3秒後清除狀態
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '電子郵件',
      value: 'wu_ivy0528@hotmail.com',
      link: 'mailto:wu_ivy0528@hotmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '電話',
      value: '+886 935 147 360',
      link: 'tel:+886935147360'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '地點',
      value: '新竹, 台灣',
      link: null
    }
  ];

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: '視覺設計',
      description: '精通平面設計、品牌識別與視覺系統規劃，創造獨特的視覺體驗'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: '網頁設計',
      description: '專精於響應式網頁設計，結合美學與實用性的完美平衡'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: '多媒體動畫',
      description: '擅長動態影像設計與多媒體內容製作，提升品牌傳播效果'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '品牌策略',
      description: '深度理解品牌價值，提供完整的企業識別系統（CIS）解決方案'
    }
  ];

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

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6 font-noto">
            聯絡方式
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-noto">
            我樂於接受新的挑戰和合作機會。無論是全職工作、專案合作或技術諮詢，都歡迎與我聯絡討論。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8 font-noto">
              聯絡資訊
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-pink-600 bg-pink-100 p-3 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark font-noto">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-pink-600 transition-colors font-noto"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-noto">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4 font-noto">
                社群媒體與作品集
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-pink-300 hover:text-pink-600 transition-colors duration-200 font-noto"
                  >
                    {social.icon}
                    <span className="ml-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8 font-noto">
              發送訊息
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2 font-noto">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors font-noto"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2 font-noto">
                    電子郵件 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors font-noto"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2 font-noto">
                  主題 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors font-noto"
                  placeholder="請輸入訊息主題"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2 font-noto">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none font-noto"
                  placeholder="請詳細描述您的需求或想法..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed font-noto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    發送中...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    發送訊息
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-xl">
                  <p className="text-green-700 font-noto">
                    訊息已成功發送！我會盡快回覆您。
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center font-noto">
            服務項目
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
              >
                <div className="text-pink-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-3 font-noto">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm font-noto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6 font-noto">
            準備開始您的專案了嗎？
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto font-noto">
            讓我們一起將您的創意想法轉化為令人驚艷的視覺作品。
            立即聯絡我，開始您的設計之旅。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:wu_ivy0528@hotmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-200 font-medium font-noto"
            >
              <Mail className="w-4 h-4 mr-2" />
              立即發送郵件
            </a>
            <a
              href="tel:+886935147360"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-pink-600 transition-colors duration-200 font-medium font-noto"
            >
              <Phone className="w-4 h-4 mr-2" />
              直接通話
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

