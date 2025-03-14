// src/lib/storage.ts
import { supabase } from '@/lib/utils/supabase';

export const uploadImage = async (
  file: File,
  bucket: string,
  path: string = ''
) => {
  try {
    // Crear un nombre de archivo único usando timestamp
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = path ? `${path}/${fileName}` : fileName;

    // Subir el archivo
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) throw error;

    // Obtener URL pública
    const { data: publicUrlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { data: { ...data, publicUrl: publicUrlData.publicUrl }, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const deleteImage = async (
  bucket: string,
  path: string
) => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    return { error };
  }
};