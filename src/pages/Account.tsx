
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Edit, Mail, User, Calendar, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();

  const handleBackToChat = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToChat}
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Chat
            </Button>
          </div>
          <h1 className="text-xl font-semibold">Minha Conta</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Profile Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              Perfil do Usuário
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </CardTitle>
            <CardDescription className="text-gray-400">
              Gerencie suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar and Basic Info */}
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" alt="João Silva" />
                <AvatarFallback className="bg-blue-600 text-white text-2xl">
                  JS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">João Silva</h3>
                <p className="text-gray-400">@joaosilva</p>
                <p className="text-sm text-gray-500 mt-1">Membro desde Janeiro 2024</p>
              </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* User Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  value="João Silva"
                  className="bg-gray-700 border-gray-600 text-white"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Label>
                <Input
                  id="email"
                  value="joao.silva@email.com"
                  className="bg-gray-700 border-gray-600 text-white"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="joined" className="text-gray-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Data de Cadastro
                </Label>
                <Input
                  id="joined"
                  value="15 de Janeiro, 2024"
                  className="bg-gray-700 border-gray-600 text-white"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-300 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Localização
                </Label>
                <Input
                  id="location"
                  value="São Paulo, Brasil"
                  className="bg-gray-700 border-gray-600 text-white"
                  readOnly
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Estatísticas</CardTitle>
            <CardDescription className="text-gray-400">
              Seu histórico de atividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">47</div>
                <div className="text-sm text-gray-400">Conversas Iniciadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">R$12.750</div>
                <div className="text-sm text-gray-400">Total Acumulado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">23</div>
                <div className="text-sm text-gray-400">Vitórias em Debates</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Configurações</CardTitle>
            <CardDescription className="text-gray-400">
              Personalize sua experiência
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Notificações por Email</h4>
                <p className="text-sm text-gray-400">Receba atualizações sobre suas conversas</p>
              </div>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                Configurar
              </Button>
            </div>
            
            <Separator className="bg-gray-700" />
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Privacidade</h4>
                <p className="text-sm text-gray-400">Gerencie quem pode ver seu perfil</p>
              </div>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                Configurar
              </Button>
            </div>
            
            <Separator className="bg-gray-700" />
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-red-400 font-medium">Excluir Conta</h4>
                <p className="text-sm text-gray-400">Remover permanentemente sua conta</p>
              </div>
              <Button variant="destructive" size="sm">
                Excluir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
