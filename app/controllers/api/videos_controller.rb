
class Api::VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def show
        @video= Video.find_by(id: params[:id])
        if (@video)
           render :show
        else
            render json: ["badvideo"], status: 422
        end
    end

    def index
        @videos = Video.all
        render :index
    end

    def create
        if params[:video][:uploaded_video].empty?
            render json: ["Please attach a video"], status: 422
            return nil
        end

        @video= Video.new(video_params)
        @video.user_id = current_user.id

        if @video.save
            render :show
        else
            render json: @video.errors.full_message, status: 422
        end
    end

    def update

    end

    def destroy
        @video= Video.find(params[:id])

        if @video && @video.user_id == current_user.id
            @video.destroy
            render json: ["Video successfully destroyed"]
        else
            render json: ["Cannot delete this video due to invalid credentials"], status: 403 #forbidden
        end
    end

    def current_views
        @video = Video.find(params[:id])

        if @video.update(params.require(:video).permit(:views))
            render :show
        else
            render json: ["Cannot update views"], status: 422
        end
    end

    def search
        if params[:query].present?
            @videos = Video.where('LOWER(title) ~ ?', params[:query].downcase)
        else
            @videos = Video.none
        end

        render :index
    end


    private

    def video_params
        params.require(:video).permit(:uploaded_video, :title, :description, :views, :user_id, :thumbnail)
    end

end
