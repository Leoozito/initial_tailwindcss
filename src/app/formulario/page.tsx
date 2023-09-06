"use client"
import { BsSearch } from 'react-icons/bs'
import { Input, Select, Option, Card, CardBody, Typography, Checkbox} from '@material-tailwind/react'
import { useState, useEffect } from 'react'

export default function Empresa_Nf() {

    const [visible1, setVisible] = useState(false) // para os checkbox
	const handleClick1 = () => {
		setVisible(!visible1)
	};
  
    const [visible2, setVisible2] = useState(false) // para os checkbox
    const handleClick2 = () => {
        setVisible2(!visible2)
    };

    const [desabilitar, setDesabilitar] = useState(false);
    const [desabilitarInput, setDesabilitarInput] = useState(false); 

    useEffect(() => {
    }, []);  
    
    const dadosCnpj = () => {
        const dados = "Todos os dados do cliente"
        if (dados === null) {
            setDesabilitarInput(false)
        }
        else {
            setDesabilitarInput(true)
        }
    }

    const habilitaInput = () => {
        setDesabilitarInput(false)
    }

    return (
        <>
          <Card className='bg-white/40 overflow-hidden border rounded-xl shadow-xl h-auto px-4'>
            <CardBody className='mx-10'>
              <div className="mt-5 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
                <div className="grid md:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-6">
                    <div className='md:mr-4 lg:mr-0 sm:mb-4 lg:mb-0 md:mt-0 flex'>
                        <input placeholder="ID:" className="sm:mr-2 lg:mr-6 h-10 md:w-24 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 p-2" disabled={desabilitarInput} />
                        <Input className='lg:w-full' disabled={desabilitarInput} label="CNPJ:" />
                    </div>
                    
                    <div className="flex">
                      <Input
                      label="Certificado :"
                      className="xl:w-full py-2 shadow-sm sm:text-sm sm:leading-6 md:rounded-r-none "
                      />
                      <div className="relative">
                        <button
                            className="right-0 h-10 px-4 pt-1 text-xs bg-blue-600 rounded-r-lg text-white shadow-lg"
                        >
                            <BsSearch size={16} />
                        </button>
                      </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-1 2xl:grid-cols-2 gap-6 xl:ml-3">
                    <Input disabled={desabilitarInput} label="Inscrição Municipal:" />
                    <Input disabled={desabilitarInput} label="Inscrição Estadual:" />
                </div>
              </div>

              <div className="mt-5 grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
                    <div className='grid md:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-6'>
                        <div>
                            <Select label="Regime Tributário:" disabled={desabilitarInput}>
                                <Option className="hidden md:block">NENHUM</Option>
                                <Option className="hidden md:block">Simples Nacional</Option>
                                <Option className="hidden md:block">Simples Nacional - Excesso</Option>
                                <Option className="hidden md:block">Normal - Lucro Prezumido</Option>
                                <Option className="hidden md:block">Normal - Lucro Real</Option>
                            </Select>
                        </div>
                        <div className='mr-1'>
                            <Select label="Regime Tributário Especial:" disabled={desabilitarInput}>
                                <Option className="hidden md:block">Sem Regime Tributário Especial</Option>
                                <Option className="hidden md:block">Micro Empresa Municipal</Option>
                                <Option className="hidden md:block">Estimativa</Option>
                                <Option className="hidden md:block">Sociedade de Profissionais</Option>
                                <Option className="hidden md:block">Cooperativa</Option>
                                <Option className="hidden md:block">Microempresário Individual - MEI</Option>
                                <Option className="hidden md:block">Microempresa ou Pequena Porte - ME EPP</Option>
                            </Select>
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-1 2xl:grid-cols-3 gap-6 xl:ml-3'>
                        <div className="">
                            <Select label="Incentivo fiscal:" disabled={desabilitarInput}>
                            <Option className="hidden md:block">Sim</Option>
                            <Option className="hidden md:block">Não</Option>
                            </Select>
                        </div>
                        <div className="">
                            <Select label="Incentivo cultural:" disabled={desabilitarInput}>
                                <Option className="hidden md:block">Sim</Option>
                                <Option className="hidden md:block">Não</Option>
                            </Select>
                        </div>
                        <div className=''>
                            <Select label="Simples Nacional:" disabled={desabilitarInput}>
                                <Option className="hidden md:block">Sim</Option>
                                <Option className="hidden md:block">Não</Option>
                            </Select>
                        </div>
                    </div>
              </div>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                  <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
                      <div className="">
                          <Input label="NCM :"  disabled={desabilitarInput}/>
                      </div>
                      <div className="">
                          <Select label="CFOP :" disabled={desabilitarInput}>
                              <Option className="hidden md:block">5101</Option>
                              <Option className="hidden md:block">5102</Option>
                          </Select>
                      </div>
                  </div>
                  <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6 xl:ml-3">
                      <div className="">
                          <Input label="ICMS-ORIGEM :" disabled={desabilitarInput}/>
                      </div>
                      <div className="">
                          <Input label="ICMS-CST :" disabled={desabilitarInput}/>
                      </div>
                  </div>
              </div>

              <div className="mt-5 grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 3xl:flex gap-6">
                <div className="grid md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-6">
                    <div className="flex grid-cols-1 md:grid-cols-2">
                        <Select label="Tipo Logradouro:" disabled={desabilitarInput}>
                            <Option className="hidden md:block">RUA</Option>
                            <Option className="hidden md:block">AVENIDA</Option>
                            <Option className="hidden md:block">ALAMEDA</Option>
                            <Option className="hidden md:block">TRAVESSA</Option>
                            <Option className="hidden md:block">PRAÇA</Option>
                            <Option className="hidden md:block">RODOVIA</Option>
                            <Option className="hidden md:block">ESTRADA</Option>
                        </Select>
                    </div>
                    <div className=''>
                        <Input label="Bairro :" disabled={desabilitarInput}/>
                    </div>
                </div>
                <div className='grid lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1 gap-6 xl:ml-3'>
                    <div className='flex'>
                        <input placeholder="Número:" className="mr-3 h-10 w-40 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 p-2" disabled={desabilitarInput} />
                        <Input className="w-full" label="Complemento :" disabled={desabilitarInput}/>
                    </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </>
    )
}