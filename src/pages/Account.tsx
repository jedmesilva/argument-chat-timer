
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

export default function Account() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-600 p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBackClick}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
          <h1 className="text-xl font-semibold">Minha Conta</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-6">
        {/* Profile Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg" alt="Usuario" />
              <AvatarFallback className="bg-blue-600 text-white text-2xl">
                U
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-white">João Silva</h2>
              <p className="text-gray-400">Usuário desde Janeiro 2024</p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Informações da Conta</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Nome</label>
              <input
                type="text"
                value="João Silva"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value="joao.silva@email.com"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Estatísticas</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">15</div>
              <div className="text-sm text-gray-400">Conversas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">R$12.500</div>
              <div className="text-sm text-gray-400">Total Acumulado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
